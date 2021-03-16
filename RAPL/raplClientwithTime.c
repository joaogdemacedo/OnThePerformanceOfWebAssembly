#include <netdb.h> 
#include <netinet/in.h> 
#include <unistd.h>
#include <stdio.h>
#include <stdlib.h> 
#include <string.h> 
#include <sys/socket.h> 
#include <sys/types.h> 
#include <pthread.h>
#include <arpa/inet.h>
#include <time.h> 



#define MAX 256
#define PORT "8080"
#define HOST "localhost"

int main(int argc, char **argv) 
{ 
    int sockfd, ainfoS; 
    struct addrinfo* ainfo;
    struct addrinfo hints;

    char timeOutput[MAX]; /* time output logfile name */
    char timefinal[MAX];
    char *found, *timefile;
    
    timefile = strdup(argv[2]); // argv[2] example "fasta/C/fastaresult1"
    found = strsep(&timefile,"/");
    found = strsep(&timefile,"/");
    found = strsep(&timefile," ");  
    strcpy(timeOutput, found);  
    strcat(timeOutput, ".time");
    //printf("timeoutput: %s\n", timeOutput); // timeOutput example "fastaresult1.time"


    FILE * fp = fopen(timeOutput, "w+"); /* Open file */

    fprintf(fp, "Time\n"); /* Write header line */


    // Create start message to send to server
    char * startmsg = malloc(5 + strlen(argv[1]) + strlen(argv[2]));
    sprintf(startmsg, "start %s %s", argv[1], argv[2]);
    printf("%s\n", startmsg);

    // Command to execute
    char command[MAX] = "";
    strcat(command, argv[3]);
    printf("Command: %s\n", command);

    // Get addr info
    // Specify hints
    memset(&hints, 0, sizeof(hints));
    hints.ai_family = PF_INET; // IPv4 Only
    hints.ai_socktype = SOCK_STREAM; // TCP Socket

    ainfoS = getaddrinfo(HOST, PORT, &hints, &ainfo);
    if (ainfoS != 0) {
    	printf("Address information failed...\n");  
        exit(0);
    } else {
        printf("Address information obtained...\n");
    }

    // socket create and varification 
    sockfd = socket(ainfo->ai_family, ainfo->ai_socktype, ainfo->ai_protocol); 
    if (sockfd == -1) { 
        printf("Socket creation failed...\n"); 
        exit(0); 
    } 
    else
        printf("Socket successfully created..\n"); 
  
    // connect the client socket to server socket
    if (connect(sockfd, ainfo->ai_addr, ainfo->ai_addrlen) != 0) { 
        printf("Connection with the server failed...\n"); 
        exit(0); 
    } 
    else
        printf("Connected to the server.\n"); 
  
    // Send message to start measuring
    write(sockfd, startmsg, 256); 

    // Calculate the time at the beginning
    clock_t t; 
    t = clock(); 

    // Run command
    system(command);

    // Calculate the time at the end
    t = clock() - t; 
    double time_taken = ((double)t)/CLOCKS_PER_SEC; // in seconds 
    sprintf(timefinal,"%f", time_taken);
    fprintf(fp, timefinal); /* Write time line */
    printf("func took %f seconds to execute \n", time_taken); 
    printf("Func took %s seconds to execute \n", timefinal); 


    // Send message to stop measuring
    write(sockfd, "end", 3); 

    free(startmsg);
    freeaddrinfo(ainfo);
  
    // close the socket 
    close(sockfd); 
} 
