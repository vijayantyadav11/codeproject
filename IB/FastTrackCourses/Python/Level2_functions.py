def factorial(N):
    # Your code goes here
    fac=1
    for i in range(2,N+1):
        fac*=i
    return fac


# Functions with keyword arguments

# The arguments which have a default value are termed as keyword arguments and required ones are positional arguments.
# These arguments should always be the last ones, i.e. All the required (positional) arguments go first. They are then followed by the optional keyword arguments.
# Arguments without defaults are required otherwise you get a syntax error.