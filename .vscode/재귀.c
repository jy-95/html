#include <stdio.h>

int f(int n){
  printf("now: %d\n", n);
  if(n == 0 || n ==1) return n;
  printf("passing...:%d, %d\n", n-1, n-2);
  return f(n-1) + f(n-2);
}

int main() {
  int z = f(3);
  printf("result: %d\n", z);
  // int y = f(4);
  // int a = f(3);
  // int b = f(2);
  // int c = f(1);
  // printf("%d, %d, %d, %d, %d", z, y, a, b, c);
  return 0;
}