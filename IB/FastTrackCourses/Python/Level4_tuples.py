def main():
    tuple1 = tuple(("one", "two", "three"))
    tuple2 = tuple(("1", "2", "3"))
    
    # change value at index 0 of both tuple to string "number"
    # Your code goes here
    tuple1 = list(tuple1)
    tuple1[0] = "number"
    tuple1=tuple(tuple1)
    tuple2 = list(tuple2)
    tuple2[0] = "number"
    tuple2=tuple(tuple2)
    
    
    
    print(tuple1)
    print(tuple2)
    
    return 0

if __name__ == '__main__':
    main()