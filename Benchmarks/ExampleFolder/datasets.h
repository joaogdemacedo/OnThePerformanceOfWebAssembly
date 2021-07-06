#ifdef SMALL_DATASET
#define INPUT 625
#endif
#ifdef LARGE_DATASET
#define INPUT 2500001
#endif

#ifndef SMALL_DATASET
  #ifndef LARGE_DATASET
    #ifndef MEDIUM_DATASET
      #define MEDIUM_DATASET
    #endif
  #endif
#endif

#ifdef MEDIUM_DATASET
#define INPUT 1250
#endif