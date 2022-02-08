/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import app from 'assets/images/slap.jpg';
import background from 'assets/images/background.png';

const data = [
  {
    id: 1,
    label: 'Verified Contract',
  },
  {
    id: 2,
    label: 'Locked Liquidity',
  },
  {
    id: 3,
    label: 'Safemoon Fork',
  },
  {
    id: 4,
    label: 'Full of Shit',
  },
  {
    id: 5,
    label: 'Memes',
  },
  {
    id: 6,
    label: 'Lost college savings',
  },
];

const AppFeature = () => {
  return (
    <section  id="crap" sx={styles.section}  style={{backgroundImage: `url(${background})`, minHeight: '700px'}}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Fuck McDonalds, fuck Twitter, to hell with call groups"
              description="McShit is purely a community token with no marketing budget so don't cry for Travladd. It is also safe."
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
          </Box>
          <Box sx={styles.illustration} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Image src={app} alt="workHard" />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default AppFeature;

const styles = {
  section: {
    fontWeight: 700,
    color: 'white',
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['auto', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'white',
      fontSize: ['24px', null, null, '36px', '31px', 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: '-1px',
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: [24, null, null, 30, 25, null, '100%'],
      top: ['4px', '8px', null, null, '4px', '8px'],
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        maxWidth: 35,
      },
    },
    p: {
      fontWeight: 700,
      color: 'white',
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  illustration: {
    mb: [0, null, null, null, 0, 0],
    mt: [0],
    zIndex: '1',
    img: {
      display: ['none', null, null, null, 'block'],
    },
    '@media screen and (max-width: 767px)': {
      background: `transparent url(${app}) no-repeat center top / cover`,
      width: '100%',
      minHeight: 310,
      marginBottom: 40,
    },
  },
};
