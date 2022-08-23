import { Button, Grid, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectModifyCollection } from "../../store/selectors";
import { toggleShowIcp } from "../../store/slices/common";
import { formatPrice } from "../../utils";
import { StatsBox } from "../StatsBox";

export const TotalIcpValue = () => {
  const { showIcp } = useAppSelector((state) => state.common);
  const { price } = useAppSelector((state) => state.data);
  const { totalCollectionsPrice } = useAppSelector(selectModifyCollection);

  const dispatch = useAppDispatch();

  const toggleCurrency = () => {
    dispatch(toggleShowIcp(!showIcp));
  };

  const displayBox = () => {
    const totalVal = showIcp
      ? formatPrice(totalCollectionsPrice.actual, 2)
      : formatPrice(totalCollectionsPrice.actual * price);

    return (
      <StatsBox
        title="Actual"
        value={`${totalVal} ${showIcp ? "ICP" : "USD"}`}
      />
    );
  };

  const gridStyle = { width: { xs: "100%", md: "auto" } };

  return (
    <>
      <Stack flexDirection="row" alignItems="flex-start">
        <Typography variant="h6" fontWeight={600} mr={1}>
          Total value
        </Typography>

        <Button
          onClick={toggleCurrency}
          variant="outlined"
          size="small"
          sx={{ fontSize: "12px", minWidth: "50px" }}
        >
          Switch to {!showIcp ? "ICP" : "USD"}
        </Button>
      </Stack>

      <Grid
        container
        spacing={2}
        rowSpacing={1}
        mb={3}
        mt={1}
        textAlign="center"
      >
        <Grid sx={gridStyle} item>
          {displayBox()}
        </Grid>
      </Grid>
    </>
  );
};
