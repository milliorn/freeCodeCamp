#include <iostream>

int max(int a, int b);

int main()
{
  int x = 5;
  int y = 2;
  int result = max(x, y);

  std::cout << "max : " << result << std::endl;
  return 0;
}

int max(int a, int b)
{
  return a > b ? a : b;
}