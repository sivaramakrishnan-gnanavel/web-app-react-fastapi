import uvicorn
from fastapi import HTTPException, APIRouter
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

router = APIRouter(prefix="/activity", tags=["activity", ])

class RowData(BaseModel):
    id: int
    pattern: str
    details: str
    successRate: str
    patientCount: int
    level: int

rows_db: List[RowData] = [
    RowData(id=1, pattern="Pattern 1", details="tester", successRate="80%", patientCount=10, level=1),
    RowData(id=2, pattern="Pattern 2", details="tester", successRate="75%", patientCount=8, level=2),
    RowData(id=3, pattern="Pattern 3", details="tester", successRate="32%", patientCount=5, level=3),
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

@router.get("/progressBar")
def progress_bar_data():
    return [
        { "id": 1, "title": "New", "desc": "New Tasks", "progress": 23 },
        { "id": 2, "title": "Completed", "desc": "Completed Tasks", "progress": 65 }
    ]

@router.get("/overview-tasks")
def overview_tasks():
    return [
     {
       "id": 1,
       "title": "Task 1",
       "description": "Description for Task 1",
       "progress": 70,
     },
     {
       "id": 2,
       "title": "Task 2",
       "description": "Description for Task 2",
       "progress": 50,
     },
     {
       "id": 3,
       "title": "Task 3",
       "description": "Description for Task 3",
       "progress": 90,
     }]




@router.get("/patients-tasks")
def overview_tasks():
    return [
     {
       "id": 1,
       "title": "Task 1",
       "description": "Description for Task 1",
       "progress": 70,
     },
     {
       "id": 2,
       "title": "Task 2",
       "description": "Description for Task 2",
       "progress": 50,
     },
     {
       "id": 3,
       "title": "Task 3",
       "description": "Description for Task 3",
       "progress": 90,
     }]



@router.get("/attendance")
def attendance():
    return {
     "2024-12-01": "present",
     "2024-12-06": "absent",
     "2024-12-11": "late",
     "2024-12-21": "present",
     "2024-12-20": "absent",
   }