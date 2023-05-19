function trap(height: number[]): number {
    let l = 0, r =  height.length - 1;
    let l_max = 0,r_max=0
    let ans = 0
    
    while(r > l) {
         if(height[l] >= height[r]) {
            if(r_max > height[r]) {
                ans += r_max - height[r]
            } else {
                r_max = height[r]
            }
            r--
         } else {
            if(l_max > height[l]){
                ans += l_max - height[l]
            } else {
                l_max = height[l]
            }
            l++
         }
        
    }
    

    return ans
};
//[5,4,1,2]
console.log(trap([4, 2, 3]))

