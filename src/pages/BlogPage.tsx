import { Box, Divider, Typography } from "@mui/material";

function BlogSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        mb: 6,

        // Important if you have a fixed AppBar
        scrollMarginTop: "90px",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.8,
        }}
      >
        {children}
      </Typography>

      <Divider sx={{ mt: 5 }} />
    </Box>
  );
}

export default function BlogPage() {
  return (
    <>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom>
          Building a Census Mapping Application
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 5 }}>
          A walkthrough of the architecture and design.
        </Typography>

        <BlogSection id="introduction" title="Introduction">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </BlogSection>

        <BlogSection id="architecture" title="Architecture">
          The application consists of a React frontend and a FastAPI
          backend.
        </BlogSection>

        <BlogSection id="database" title="Database">
          PostgreSQL and PostGIS provide the spatial database layer.
        </BlogSection>

        <BlogSection id="api" title="API">
          FastAPI exposes the census and geographic data through REST
          endpoints.
        </BlogSection>

        <BlogSection id="conclusion" title="Conclusion">
          This architecture keeps the individual components relatively
          independent.
        </BlogSection>
      </Box>
    </>
  )
}
