import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import useComponentSize from "@rehooks/component-size";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Controller, useForm } from "react-hook-form";
import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { ResetButtons } from "./ResetButtons";
import { PrincipalListButton } from "./PrincipalListButton";
import { getCollections } from "../../store/slices/collection";
import { signPrincipalID } from "../../store/slices/common";
import { getData } from "../../store/slices/data";

interface Form {
  principalID: string;
}

export const Search = () => {
  const dispatch = useAppDispatch();
  const { loading, collections, validating } = useAppSelector(
    (state) => state.collection
  );
  const { principalID: defaultPrincipalID } = useAppSelector(
    (state) => state.common
  );
  const {
    loading: dataLoading,
    error: dataError,
    validating: validatingData,
    listings,
  } = useAppSelector((state) => state.data);

  const headingRef = React.useRef(null);
  const { width } = useComponentSize(headingRef);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Form>({ defaultValues: { principalID: defaultPrincipalID } });

  const onSubmit = async ({ principalID }: Form) => {
    dispatch(signPrincipalID(principalID));

    await Promise.all([
      dispatch(getData({})),
      dispatch(getCollections({ principalID })),
    ]);
  };

  const disabled =
    loading || validating || dataLoading || validatingData || !!dataError;

  return (
    <>
      <Stack alignItems="center" py={3} mb={1} textAlign="center">
        <Typography
          ref={headingRef}
          variant="h3"
          sx={{
            typography: {
              xs: { fontSize: 27 },
              sm: { fontSize: 34 },
              md: { fontSize: 44 },
            },
          }}
        >
          Calculate floor value of NFTs
        </Typography>
        <Stack
          mt={2}
          flexWrap="nowrap"
          maxWidth="100%"
          alignItems="normal"
          gap={0}
          sx={{ width: { xs: "100%", md: width } }}
        >
          <Stack
            flexDirection="row"
            alignItems="flex-start"
            width="100%"
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              control={control}
              name="principalID"
              rules={{ required: true, maxLength: 63, minLength: 63 }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  autoFocus
                  fullWidth
                  disabled={disabled}
                  id="principalInput"
                  placeholder="Enter your principal"
                  variant="outlined"
                  error={!!errors.principalID}
                  helperText={!!errors.principalID && "Enter valid principal."}
                  value={value}
                  size="small"
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />
              )}
            />

            <PrincipalListButton setValue={setValue} />

            <LoadingButton
              loading={loading || dataLoading}
              disabled={disabled}
              type="submit"
              variant="contained"
              sx={{ m: "0 !important", height: 40, minWidth: 0 }}
            >
              <Send />
            </LoadingButton>
          </Stack>
        </Stack>

        {!!collections.length && !!listings.length ? (
          <Stack width={width} mt={1} flexDirection="row" flexWrap="wrap">
            <ResetButtons />
          </Stack>
        ) : null}
      </Stack>
    </>
  );
};
