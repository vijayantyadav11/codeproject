for t in range(int(input())):
    n=int(input())
    inputList=list(input())
    noA = inputList.count('A')
    noB = n - noA
    if abs(noA - noB) >2:
        print("Case #",t+1,": N",sep="")
    else:
        print("Case #",t+1,": Y",sep="")
        

