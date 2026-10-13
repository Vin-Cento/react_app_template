import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Box>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.02em",
            mb: 2,
          }}
        >
          US Census Tracts
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700 }}
        >
          U.S. census tracts are small, relatively permanent geographic regions defined by the U.S. Census Bureau to collect, study, and compare local population and housing data.
          Think of a census tract as a small neighborhood or a collection of a few city blocks.
        </Typography>

        <Typography variant="body1">
          Key Characteristics
        </Typography>

        <Box component='ul'>
          <Typography component="li">
            Population Size: Each tract usually has about 4,000 people. The number can range from 1,200 to 8,000 people. If a county is very small, the whole county might be just one tract.
          </Typography>
          <Typography component="li">
            Physical Boundaries: Tract lines usually follow visible features like roads, rivers, or railroad tracks. They always stay inside county and state lines.
          </Typography>
          <Typography component="li">Built to Last: The government keeps tract boundaries the same for many years. This stability lets researchers compare how an area changes from one census to the next. If a neighborhood grows a lot, a tract might be split into two pieces.
          </Typography>
        </Box>

        <Typography>
          How They Fit Together

          Census geographies use a nested system:

          <Box component='ol'>
            <Typography component="li">
              States contain counties.
            </Typography>
            <Typography component="li">
              Counties contain census tracts.
            </Typography>
            <Typography component="li">
              Census tracts contain block groups (smaller groups of blocks).
            </Typography>
            <Typography component="li">
              Block groups contain individual census blocks (the smallest unit, like a single city block).
            </Typography>
          </Box>

          Why They Are Used

          • Public Health: Organizations use tracts to track disease rates, pollution, or access to care in specific areas using tools like the City Health Dashboard.
          • Urban Planning: City planners use them to decide where to build schools, parks, or roads.
          • Funding: Governments use tract data to hand out grants and financial aid to communities that need help.
        </Typography>
      </Box>
    </>
  )
}
