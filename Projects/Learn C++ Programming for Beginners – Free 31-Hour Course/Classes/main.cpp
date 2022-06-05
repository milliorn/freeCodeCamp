#include <iostream>

const double PI = 3.1415926535;

class Cylinder
{
public:
  // Cylinder() = default;
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

  double get_base_radius()
  {
    return base_radius;
  }

  double get_height()
  {
    return base_height;
  }

  void set_base_radius(double radius)
  {
    base_radius = radius;
  }

  void set_height(double height)
  {
    base_height = height;
  }

private:
  double base_radius;
  double base_height;
};

int main()
{
  Cylinder cylinder;
  std::cout << "volume -> " << cylinder.volume() << std::endl;
  std::cout << "radius -> " << cylinder.get_base_radius() << std::endl;
  std::cout << "height -> " << cylinder.get_height() << std::endl;

  return 0;
}
