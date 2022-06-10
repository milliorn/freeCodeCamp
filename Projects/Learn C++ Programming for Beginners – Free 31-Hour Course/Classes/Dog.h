#include <iostream>

class Dog
{
public:
  Dog() = default;
  Dog(std::string_view name, std::string_view breed, int p_age_param);
  ~Dog();

private:
  std::string name;
  std::string breed;
  int *p_age{nullptr};
};

Dog::Dog(std::string_view dogName, std::string_view dogBreed, int dogAge)
{
  name = dogName;
  breed = dogBreed;
  p_age = new int;
  *p_age = dogAge;
}

void dog_func()
{
  Dog dog("Bulldog", "Tazz", 1);
}

Dog::~Dog()
{
  delete p_age;
  std::cout << "Dog destructor called -> " << name << std::endl;
}
