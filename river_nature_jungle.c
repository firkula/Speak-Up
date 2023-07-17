#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char* speak_up(char* message);

int main() {
	printf("Let's Speak Up!\n\n");

	// read users input
	char* userInput = (char*) malloc(1000 * sizeof(char));
	fgets(userInput, 1000, stdin);

	// run the speak up function
	char* response = speak_up(userInput);

	// print out response
	printf("\nSpeak Up Response: %s\n", response);

	free(userInput);
	free(response);

	return 0;
}

char* speak_up(char* message) {
	// copy the message
	int len = strlen(message);
	char* response = (char*) malloc((len + 1) * sizeof(char));
	memcpy(response, message, len);
	response[len] = '\0';

	// filtering the message
	for (int i = 0; i < len; i++) {
		// capitalize the first letter
		if (i == 0) {
			response[i] = toupper(response[i]);
		}

		// capitalize letter after every '. '
		if (response[i] == '.' && response[i + 1] == ' ') {
			response[i + 2] = toupper(response[i + 2]);
			i++;
		}
	}

	// return the response
	return response;
}