#include <iostream>

const double PI = 3.1415926535;

class Cylinder
{
public:
  double base_radius;
  double height;

  double volume(double radius = 0.0, double height = 0.0)
  {
    return PI * base_radius * base_radius * height;
  }
};

int main()
{
  Cylinder cylinder;
  cylinder.base_radius = 10;
  cylinder.height = 3;

  std::cout << "volume -> " << cylinder.volume(cylinder.base_radius, cylinder.height) << std::endl;
  return 0;
}