FROM python:3.10
LABEL Hem Raj Pandey

# This section is borrowed from the official Django image but adds GDAL and others
RUN apt-get update -y && apt-get upgrade -y

# Update package lists and install libgdal-dev
RUN apt-get update && apt-get install -y libgdal-dev

# Set environment variables
ENV CPLUS_INCLUDE_PATH=/usr/include/gdal
ENV C_INCLUDE_PATH=/usr/include/gdal


#Installing requiremnets.txt file
# RUN pip install --upgrade --no-cache-dir  --src /usr -r requirements.txt
# Install the required Python packages directly within the Dockerfile
# RUN pip install asgiref==3.7.2 \
#                 Django==3.2.18 \
#                 GDAL==3.4.1 \
#                 install==1.3.5 \
#                 pytz==2023.3.post1 \
#                 sqlparse==0.4.4 \
#                 typing_extensions==4.8.0

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000

CMD ["python","manage.py","runserver"]
