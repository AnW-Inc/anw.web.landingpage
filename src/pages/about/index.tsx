import { DEFAULT_OUR_TEAM_LIST_QUERY, fetchOurTeamList, ourTeamKeys } from 'hooks/cms/ourTeam'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import About from 'views/About'

const AboutPage = () => {
  return <About />
}

export const getStaticProps = async () => {
  const result = await getStaticPropsWithQueryClient({
    queries: [
      {
        key: ourTeamKeys.list(DEFAULT_OUR_TEAM_LIST_QUERY),
        func: () => fetchOurTeamList(DEFAULT_OUR_TEAM_LIST_QUERY),
      },
    ],
  })

  return {
    ...result,
  }
}

export default AboutPage
