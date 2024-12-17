import uvicorn
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from endpoints.activity import router as activity_router
from endpoints.patients import router as patient_router
from endpoints.task import router as task_router

app = FastAPI()

app.include_router(activity_router)
app.include_router(patient_router)
app.include_router(task_router)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RowData(BaseModel):
    id: int
    name: str
    age: int
    profession: str

# Mock database
rows_db: List[RowData] = [
    RowData(id=1, name="Alice", age=25, profession="Developer"),
    RowData(id=2, name="Bob", age=30, profession="Designer"),
]

@app.get("/rows", response_model=List[RowData])
def get_rows():
    return rows_db

@app.post("/rows", response_model=RowData)
def add_row(row: RowData):
    if any(existing_row.id == row.id for existing_row in rows_db):
        raise HTTPException(status_code=400, detail="Row with this ID already exists.")
    rows_db.append(row)
    return row

@app.put("/rows/{row_id}", response_model=RowData)
def update_row(row_id: int, updated_row: RowData):
    for i, row in enumerate(rows_db):
        if row.id == row_id:
            rows_db[i] = updated_row
            return updated_row
    raise HTTPException(status_code=404, detail="Row not found.")

@app.delete("/rows/{row_id}")
def delete_row(row_id: int):
    global rows_db
    rows_db = [row for row in rows_db if row.id != row_id]
    return {"detail": "Row deleted successfully"}


if __name__ == '__main__':
    uvicorn.run('main:app', host='localhost', port=8000)