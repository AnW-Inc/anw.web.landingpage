import {
  blogKeys,
  DEFAULT_BLOG_LIST_QUERY,
  DEFAULT_PORTFOLIO_LIST_QUERY,
  DEFAULT_SERVICE_LIST_QUERY,
  fetchBlogList,
  fetchPortfolioList,
  fetchServiceList,
  portfolioKeys,
  serviceKeys,
} from 'hooks/cms'
import { caseStudyKeys, DEFAULT_CASE_STUDY_LIST_QUERY, fetchCaseStudyList } from 'hooks/cms/caseStudy'
import { DEFAULT_HOME_PAGE_QUERY, fetchHomePage, homePageKeys } from 'hooks/cms/home-page'
import { DEFAULT_TESTIMONIAL_LIST_QUERY, fetchTestimonialList, testimonialKeys } from 'hooks/cms/testimonial'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import Home from 'views/Home'

const HomePage = () => {
  return <Home />
}

export const getStaticProps = async () => {
  const result = await getStaticPropsWithQueryClient({
    queries: [
      {
        key: portfolioKeys.list(DEFAULT_PORTFOLIO_LIST_QUERY),
        func: () => fetchPortfolioList(DEFAULT_PORTFOLIO_LIST_QUERY),
      },
      {
        key: caseStudyKeys.list(DEFAULT_CASE_STUDY_LIST_QUERY),
        func: () => fetchCaseStudyList(DEFAULT_CASE_STUDY_LIST_QUERY),
      },
      {
        key: testimonialKeys.list(DEFAULT_TESTIMONIAL_LIST_QUERY),
        func: () => fetchTestimonialList(DEFAULT_TESTIMONIAL_LIST_QUERY),
      },
      {
        key: blogKeys.list({ ...DEFAULT_BLOG_LIST_QUERY, 'pagination[pageSize]': 4 }),
        func: () => fetchBlogList({ ...DEFAULT_BLOG_LIST_QUERY, 'pagination[pageSize]': 4 }),
      },
      {
        key: serviceKeys.list({
          sort: 'updatedAt:desc',
          populate: '*',
        }),
        func: () =>
          fetchServiceList({
            sort: 'updatedAt:desc',
            populate: '*',
          }),
      },
      {
        key: homePageKeys.detail({ ...DEFAULT_HOME_PAGE_QUERY }),
        func: () => fetchHomePage({ ...DEFAULT_HOME_PAGE_QUERY }),
      },
    ],
  })

  return {
    ...result,
  }
}

export default HomePage
