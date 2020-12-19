import sqlite3

def convertToBinaryData(filename):
    #Convert digital data to binary format
    with open(filename, 'rb') as file:
        blobData = file.read()
    return blobData

def insertBLOB(empId, name, photo):
    try:
        sqliteConnection = sqlite3.connect('SQLite_Python.db')
        cursor = sqliteConnection.cursor()
        print("Connected to SQLite")
        sqlite_insert_blob_query = """ INSERT INTO new_employee
                                  (id, name, photo) VALUES (?, ?, ?)"""

        empPhoto = convertToBinaryData(photo)
        # Convert data into tuple format
        data_tuple = (empId, name, empPhoto)
        cursor.execute(sqlite_insert_blob_query, data_tuple)
        sqliteConnection.commit()
        print("Image and file inserted successfully as a BLOB into a table")
        cursor.close()

    except sqlite3.Error as error:
        print("Failed to insert blob data into sqlite table", error)
    finally:
        if (sqliteConnection):
            sqliteConnection.close()
            print("the sqlite connection is closed")


insertBLOB(1, "Smith", "/Users/willg/react-projects/ecomm-sites/ecommm-site-1/src/components/images/build.jpg")
insertBLOB(2, "David", "test.jpg")

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
