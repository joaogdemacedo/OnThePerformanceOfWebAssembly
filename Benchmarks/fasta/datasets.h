#ifdef SMALL_DATASET
#define TEST_REPEAT_TIME 25000
#endif
#ifdef BIG_DATASET
#define TEST_REPEAT_TIME 2500000
#endif

#ifndef SMALL_DATASET
  #ifndef BIG_DATASET
    #ifndef MEDIUM_DATASET
      #define MEDIUM_DATASET
    #endif
  #endif
#endif

#ifdef MEDIUM_DATASET
#define TEST_REPEAT_TIME 250000
#endif