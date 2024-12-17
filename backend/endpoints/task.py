import uvicorn
from fastapi import HTTPException, APIRouter
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

router = APIRouter(prefix="/task", tags=["tasks", ])

class RowData(BaseModel):
    id: int
    taskDetails: str
    assignedTo: str
    status: str
    comments: str
    ETA: str

rows_db: List[RowData] = [
    RowData(id=1, taskDetails="Patient Neuro Follow Up", assignedTo="tester", status="In progress", comments="", ETA="1d"),
    RowData(id=2, taskDetails="Patient Physco Follow Up", assignedTo="tester", status="Force Closed", comments="Patient doesnt met criteria", ETA="NA"),
    RowData(id=3, taskDetails="Patient Physio Follow Up", assignedTo="tester", status="Completed", comments="Successfull", ETA="1d"),
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
