#include <stdio.h>

typedef enum {
	monday,
	tuesday,
	wednesday,
	thursday,
	friday,
	saturday,
	sunday
} WEEKDAY;

int main(void) {
	WEEKDAY day = monday;

	if (day == monday) {
		printf("It's monday!");
	} else if (day == 1) {
		printf("It's tuesday");
	} else {
		printf("It's not monday or tuesday");
	}
}
