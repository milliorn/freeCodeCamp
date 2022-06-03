#include <iostream>

const double PI = 3.1415926535;

class Cylinder
{
public:
  Cylinder()
  {
    base_radius = 2.0;
    base_height = 2.0;
  }

  Cylinder(double radius, double height)
  {
    base_radius = radius;
    base_height = height;
  }

  double volume()
  {
    return PI * base_radius * base_radius * base_height;
  }

private:
  double base_radius;
  double base_height;
};

int main()
{
  Cylinder cylinder;
  std::cout << "volume -> " << cylinder.volume() << std::endl;
  return 0;
}
