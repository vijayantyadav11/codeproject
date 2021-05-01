for t in range(int(input())):
    n=int(input())
    lsI=list(input())
    lsO=list(input())
    matrix=[['']*n for _ in range(n)]
    for i in range(0,n,1):
        matrix[i][i]='Y'
    for i in range(n-2,-1,-1):
        if lsI[i+1]=='Y' and lsO[i]=='Y':
            matrix[i][i+1]='Y'
        else:
            matrix[i][i+1]='N'
        if lsI[(n-1)-(i+1)]=='Y' and lsO[(n-1)-i]=='Y':
            matrix[n-1-i][n-1-(i+1)]='Y'
        else:
            matrix[n-1-i][n-1-(i+1)]='N'
        for j in range(i+2,n,+1):
            if matrix[i+1][j]=='Y' and matrix[i][j-1]=='Y':
                matrix[i][j]='Y'
            else:
                matrix[i][j]='N'
            if matrix[(n-1)-(i+1)][(n-1)-j]=='Y' and matrix[(n-1)-i][(n-1)-(j-1)]=='Y':
                matrix[n-1-i][n-1-j]='Y'
            else:
                matrix[n-1-i][n-1-j]='N'
    print("Case #",t+1,":",sep="")
    print('\n'.join(map(''.join, matrix)))          
