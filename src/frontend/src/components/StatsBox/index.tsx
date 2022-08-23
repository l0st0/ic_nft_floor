import { TrendingDown, TrendingFlat, TrendingUp } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { useAppSelector } from "../../hooks";

interface StatsBoxProps {
  title: string;
  percent?: number;
  value?: string;
  haveValue?: boolean;
}

export const StatsBox: React.FC<StatsBoxProps> = ({
  title,
  value,
  percent = 0,
  haveValue = false,
}) => {
  const { mode } = useAppSelector((state) => state.common);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: mode === "dark" ? 0 : 1,
        border: mode === "dark" ? "1px solid grey" : "none",
        borderRadius: 1,
        p: 2,
        width: { xs: "100%", md: 283 },
      }}
    >
      <Box sx={{ color: "text.secondary" }}>{title}</Box>
      <Box sx={{ color: "text.primary", fontSize: 24, fontWeight: "medium" }}>
        {!percent && value && <span>{value}</span>}
        {!value && haveValue && (
          <>
            <Box
              component={
                percent < 0
                  ? TrendingUp
                  : percent === 0
                  ? TrendingFlat
                  : TrendingDown
              }
              sx={{
                color:
                  percent < 0
                    ? "success.dark"
                    : percent === 0
                    ? grey[500]
                    : "error.dark",
                fontSize: "2rem",
                verticalAlign: "sub",
              }}
            />
            <Box
              sx={{
                color:
                  percent < 0
                    ? "success.dark"
                    : percent === 0
                    ? grey[500]
                    : "error.dark",
                display: "inline",
                fontWeight: "medium",
                mx: 0.5,
              }}
            >
              {Math.abs(percent).toFixed(2)}%
            </Box>
          </>
        )}

        {!value && !haveValue && (
          <>
            <Box
              sx={{
                display: "inline",
                fontWeight: "medium",
                mx: 0.5,
              }}
            >
              <span>No data yet &#128530;</span>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
