def shifted_diff(first, second):
    first_list = list(first)

    def rotate(l, n):
        return l[-n:] + l[:-n]
        
    num = -1  

    for i in range(0, len(first_list)):
    	rotated = ''.join(rotate(first_list, i))
    	if rotated == second:
    		num = i
    
    return num



print(shifted_diff("eecoff","coffee")) # 4