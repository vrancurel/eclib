#ifndef SCALITY_EC_LIBUTIL_H

#define SCALITY_EC_LIBUTIL_H

#include <liberasurecode/erasurecode.h>
#include <liberasurecode/erasurecode_helpers.h>

ec_args * el_create_ec_args(int k, int m, int w, int hd, ec_checksum_type_t ct);
ec_backend_id_t get_ec_backend_id(int id);
ec_checksum_type_t get_ec_checksum_type(int ct);

#endif
