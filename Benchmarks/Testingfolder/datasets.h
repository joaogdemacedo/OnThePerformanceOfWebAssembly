#ifdef SMALL_DATASET
#define TEST_REPEAT_TIME 11
#endif
#ifdef BIG_DATASET
#define TEST_REPEAT_TIME 13
#endif

#ifndef SMALL_DATASET
  #ifndef BIG_DATASET
    #ifndef MEDIUM_DATASET
      #define MEDIUM_DATASET
    #endif
  #endif
#endif

#ifdef MEDIUM_DATASET
#define TEST_REPEAT_TIME 11
#endif
