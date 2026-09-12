# 北极星 NorthStar · 后端镜像（FastAPI + SQLite + Playwright）
FROM python:3.13-slim

WORKDIR /app

# 系统依赖（Playwright 抓取器需要）
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl ca-certificates \
    libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 \
    libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 \
    libxfixes3 libxrandr2 libgbm1 libasound2 \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 抓取器浏览器内核（可选，体积较大；不用抓取器可注释掉这行）
RUN playwright install --with-deps chromium

COPY app ./app
COPY data ./data

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
