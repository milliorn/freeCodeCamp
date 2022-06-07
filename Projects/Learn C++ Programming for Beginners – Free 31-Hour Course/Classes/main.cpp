#include "Cylinder.h"
#include "constants.h"
#include <iostream>

int main()
{
  Cylinder cylinder;
  std::cout << "volume -> " << cylinder.volume() << std::endl;
  std::cout << "radius -> " << cylinder.get_base_radius() << std::endl;
  std::cout << "height -> " << cylinder.get_height() << std::endl;

  return 0;
}
