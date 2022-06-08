#include "Cylinder.h"
#include <iostream>

int main()
{
  Cylinder cylinder;

  std::cout << "volume -> " << cylinder.volume() << std::endl;
  std::cout << "radius -> " << cylinder.get_base_radius() << std::endl;
  std::cout << "height -> " << cylinder.get_height() << std::endl;

  cylinder.volume();

  Cylinder *p_cylinder = &cylinder;

  std::cout << "volume -> " << p_cylinder->volume() << std::endl;

  Cylinder *p_cylinder2 = new Cylinder(100, 2);
  std::cout << "volume2 -> " << p_cylinder2->volume() << std::endl;
  std::cout << "radius2 -> " << p_cylinder2->get_base_radius() << std::endl;

  delete p_cylinder2;
  return 0;
}
