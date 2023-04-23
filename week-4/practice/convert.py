import csv
import codecs

with open('2020-1.csv', 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    rows = list(reader)

with codecs.open('2020-1.csv', 'w', encoding='cp1252') as f:
    writer = csv.writer(f)
    writer.writerows(rows)

# with open('2020.csv', newline='', encoding='utf-8') as csvfile:
#     reader = csv.reader(csvfile, delimiter=',')
#     for row in reader:
#         print(row)