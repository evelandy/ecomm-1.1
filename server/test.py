# import sqlite3
#
# def convertToBinaryData(filename):
#     #Convert digital data to binary format
#     with open(filename, 'rb') as file:
#         blobData = file.read()
#     return blobData
#
# def insertBLOB(empId, name, photo):
#     try:
#         sqliteConnection = sqlite3.connect('SQLite_Python.db')
#         cursor = sqliteConnection.cursor()
#         print("Connected to SQLite")
#         sqlite_insert_blob_query = """ INSERT INTO new_employee
#                                   (id, name, photo) VALUES (?, ?, ?)"""
#
#         empPhoto = convertToBinaryData(photo)
#         # Convert data into tuple format
#         data_tuple = (empId, name, empPhoto)
#         cursor.execute(sqlite_insert_blob_query, data_tuple)
#         sqliteConnection.commit()
#         print("Image and file inserted successfully as a BLOB into a table")
#         cursor.close()
#
#     except sqlite3.Error as error:
#         print("Failed to insert blob data into sqlite table", error)
#     finally:
#         if (sqliteConnection):
#             sqliteConnection.close()
#             print("the sqlite connection is closed")
#
#
# insertBLOB(1, "Smith", "/Users/willg/react-projects/ecomm-sites/ecommm-site-1/src/components/images/build.jpg")
# insertBLOB(2, "David", "test.jpg")

#
# import sqlite3
#
#
# def writeTofile(data, filename):
#     # Convert binary data to proper format and write it on Hard Disk
#     with open(filename, 'wb') as file:
#         file.write(data)
#     print("Stored blob data into: ", filename, "\n")
#
#
# def readBlobData(empId):
#     try:
#         sqliteConnection = sqlite3.connect('SQLite_Python.db')
#         cursor = sqliteConnection.cursor()
#         print("Connected to SQLite")
#
#         sql_fetch_blob_query = """SELECT * from new_employee where id = ?"""
#         cursor.execute(sql_fetch_blob_query, (empId,))
#         record = cursor.fetchall()
#         for row in record:
#             print("Id = ", row[0], "Name = ", row[1])
#             name = row[1]
#             photo = row[2]
#
#             print("Storing employee image and resume on disk \n")
#             photoPath = "/Users/willg/react-projects/ecomm-sites/ecomm-site-1/" + name + ".jpg"
#             writeTofile(photo, photoPath)
#
#         cursor.close()
#
#     except sqlite3.Error as error:
#         print("Failed to read blob data from sqlite table", error)
#     finally:
#         if (sqliteConnection):
#             sqliteConnection.close()
#             print("sqlite connection is closed")
#
#
# readBlobData(1)
# readBlobData(2)

from datetime import datetime
import time
import threading

now = datetime.now()

old_time = now.strftime("%S")
print(old_time)
threading.Timer(5)
new_time = now.strftime('%S')
print(new_time)

if float(new_time) - float(old_time) >= 4:
    print('4')
elif float(new_time) - float(old_time) >= 3:
    print('3')
elif float(new_time) - float(old_time) >= 2:
    print('2')
elif float(new_time) - float(old_time) >= 1:
    print('1')
else:
    print(float(new_time) - float(old_time))

# print("Current Time =", old_time)

"""
click add an item
back end code checks if timer <= 0
if timer <= 0
    back end code deletes DB items and enters new item
    timer starts and logs in the DB
else
    back end code checks if an item exists in cart(DB) already
    if an item in cart(DB) already
        new item appends to cart(DB)
    else
        new item goes in to cart(DB)
        timer starts and logs in the DB

"""