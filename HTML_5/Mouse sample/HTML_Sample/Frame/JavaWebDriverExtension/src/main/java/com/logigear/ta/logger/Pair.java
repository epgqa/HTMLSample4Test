package com.logigear.ta.logger;

public class Pair<L, R> {
	L left;
    R right;

    public Pair(L left, R right) {
      this.left = left;
      this.right = right;
    }

    public L getLeft(){
    	return left;
    }
    
    public R getRight(){
    	return right;
    }
    
    public void set(L left, R right){
    	this.left = left;
    	this.right = right;
    }
    
    static <L,R> Pair<L,R> of(L left, R right){
        return new Pair<L,R>(left, right);
    }
}
