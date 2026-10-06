
from fastapi import FastAPI

app = FastAPI(
    title="AI Resume Intelligence API",
    description="Backend API for the AI Resume Intelligence platform",
    version="0.1.0",
)


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "ok"}
