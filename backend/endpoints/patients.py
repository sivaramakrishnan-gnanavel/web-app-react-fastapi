import uvicorn
from fastapi import HTTPException, APIRouter
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

router = APIRouter(prefix="/patient", tags=["patients", ])

class RowData(BaseModel):
    id: int
    patientName: str
    attendance: str
    assign: str
    feedback: str
    status: str

rows_db: List[RowData] = [
    RowData(id=1, patientName="Siva", attendance="80%", assign="P1 to P10", feedback="Easy", status="Completed"),
    RowData(id=2, patientName="Santhosh", attendance="75%", assign="P1 to P10", feedback="Medium", status="Assigned"),
    RowData(id=3, patientName="Arun", attendance="32%", assign="P1 to P10", feedback="Struggle", status="Eligible"),
]


@router.get("/", response_model=List[RowData])
def get_rows():
    return rows_db

@router.post("/", response_model=RowData)
def add_row(row: RowData):
    if any(existing_row.id == row.id for existing_row in rows_db):
        raise HTTPException(status_code=400, detail="Row with this ID already exists.")
    rows_db.append(row)
    return row

@router.put("/{row_id}", response_model=RowData)
def update_row(row_id: int, updated_row: RowData):
    for i, row in enumerate(rows_db):
        if row.id == row_id:
            rows_db[i] = updated_row
            return updated_row
    raise HTTPException(status_code=404, detail="Row not found.")

@router.delete("/{row_id}")
def delete_row(row_id: int):
    global rows_db
    rows_db = [row for row in rows_db if row.id != row_id]
    return {"detail": "Row deleted successfully"}
