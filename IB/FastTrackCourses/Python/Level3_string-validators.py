def main():
    S = input()
    t=[False for i in range(5)]
    #Your code goes here
    for i in range(len(S)):
        if S[i].isalnum():
            t[0]=True
        if S[i].isalpha():
            t[1]=True
        if S[i].isdigit():
            t[2]=True
        if S[i].islower():
            t[3]=True
        if S[i].isupper():
            t[4]=True
        
    print(t[0])
    print(t[1])
    print(t[2])
    print(t[3])
    print(t[4])
    return 0

if __name__ == '__main__':
    main()