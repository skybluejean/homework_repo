example = [[1,2,3],[4[5,6],7,[8,9]]]
def flatten(data):
  output = []
  for item in data:
    if type(item) == list:
    #재귀적으로 처리
      output += flatten(item)
    else:
      output.append(item)
  return output

print(flatten(example))