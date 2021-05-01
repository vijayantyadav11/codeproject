#Python Code
# https://codingcompetitions.withgoogle.com/codejam/round/00000000004362d7/00000000007c0f00

for t in range(1,int(input())+1):
    Y,N=map(int,input().split())
    ls=list(map(int,input().split()))
    ls=set(ls) # removing duplicates
    ls=list(ls) #converting to list
    ls.sort() # sorted the list ls
    ln=len(ls) #storing length of list ls
    p1=ls[0]-1  #taking all number before the least number
    p2=N-ls[ln-1]  #taking all number after the max number
    mx=0 #intializing mx, mx store the max of all gap bw any two numbers present in ls
    for i in range(ln-1):
        gap= ls[i+1]-ls[i]-1 # calculating gap between any two consecutive number 
        if(gap>mx):
            mx=gap #mx store the max of all gap bw any two numbers present in ls
        d=gap//2
        if gap & 1:
            d=gap//2+1
        if(p1<p2):  # to update the one(i.e. p1 or p2) which is smaller so that p1+p2 is maximum
            if(d>p1):

                p1=d
        else:
            if(d>p2):
                p2=d
    if(p1+p2)>mx:
        mx=p1+p2   #if p1+p2 has more numbers then mx store (p1+p2) else mx store the required winning numbers as p1 points to start of mx and p2 is the end of mx
                    #where mx is the largest gap between two consecutive numbers present in ls
    r=(mx)/N

    print("Case #{}: {}".format(t,r))



#Official Sample Cases
# 4
# 3 10
# 1 3 7
# Case #1: 0.5
# 4 10
# 4 1 7 3
# Case #2: 0.4
# 4 3
# 1 2 3 2
# Case #3: 0.0
# 4 4
# 1 2 4 2
# Case #4: 0.25        
#--------------------------
#Self made cases               
# 1
# 2 11
# 1 11
# Case #1: 0.45454545454545453   //WA
#
#  After including this edge case // using mx for this case
# 1
# 2 11
# 1 11
# Case #1: 0.8181818181818182    /AC

# 1 2 3 4 5 6 7 8 9 10 11
# T ~ ~ ~ ~ ~ ~ ~ ~ ~  T
#
# T for taken i.e ticket already soled
# ~ tickets not sold with these numbers
# for correct answer i.e. for max probablity of winning
# p1 ticket will have  number 2
# p2 ticket will have  number 10
# all number from p1 to p2 are under winning probability
