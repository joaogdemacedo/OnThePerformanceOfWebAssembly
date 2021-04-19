#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main() {
   FILE *fp;
   int small = 20000;
   int medium = 50000;
   int big = 100000;
   
   srand(time(NULL));   // Initialization, should only be called once.
   fp = fopen("datasets.h", "w+");

   fprintf(fp, "#ifdef SMALL_DATASET\n#define TEST_REPEAT_TIME {");

   for (int i = 0; i < small; i++)
   {
       int r = (rand()%10)+1;   
       fprintf(fp,"\"");
       for (int j = 0; j < r; j++)
       {
           int x = rand()%1000; 
           fprintf(fp,"%d.",x);
       }
       fprintf(fp,"\",");
   }
   fprintf(fp,"}\n#endif\n#ifdef BIG_DATASET\n#define TEST_REPEAT_TIME {");
   
   for (int i = 0; i < big; i++)
   {
       int r = (rand()%10)+1;   
       fprintf(fp,"\"");
       for (int j = 0; j < r; j++)
       {
           int x = rand()%1000; 
           fprintf(fp,"%d.",x);
       }
       fprintf(fp,"\",");
   }
   fprintf(fp,"}\n#endif\n\n#ifndef SMALL_DATASET\n\t#ifndef BIG_DATASET\n\t\t#ifndef MEDIUM_DATASET\n\t\t\t#define MEDIUM_DATASET\n\t\t#endif\n\t#endif\n#endif\n\n#ifdef MEDIUM_DATASET\n#define TEST_REPEAT_TIME {");

   for (int i = 0; i < medium; i++)
   {
      int r = (rand()%10)+1;   
       fprintf(fp,"\"");
       for (int j = 0; j < r; j++)
       {
           int x = rand()%1000; 
           fprintf(fp,"%d.",x);
       }
       fprintf(fp,"\",");
   }
   fprintf(fp,"}\n#endif\n");
   fclose(fp);
   return 0;
}