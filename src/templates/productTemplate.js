import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "../components/image-transform"

const ProductTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <GatsbySeo
        title={frontmatter.seoTitle}
        description={frontmatter.seoDescription}
        canonical={frontmatter.canonical}
        openGraph={{
          url: `${frontmatter.ogUrl}`,
          title: `${frontmatter.ogTitle}`,
          description: `${frontmatter.ogDescription}`,
          images: [
            {
              url: `${require(`../images/${frontmatter.ogImageUrl}`)}`,
              width: `${frontmatter.ogImageWidth}`,
              height: `${frontmatter.ogImageHeight}`,
              alt: `${frontmatter.ogImageAlt}`,
            },
          ],
          site_name: `${frontmatter.siteName}`,
        }}
        twitter={{
          handle: `${frontmatter.twitterHandle}`,
          site: `${frontmatter.twitterSite}`,
          cardType: `${frontmatter.twitterCardType}`,
        }}
      />

      <div className="section-product">
        <div className="container">
          <div className="content">
            <div className="image-wrapper">
              <div
                className="background"
                style={{
                  backgroundImage: `url(${require(`../images/${frontmatter.bookCoverImage}`)})`,
                }}
              >
                <div className="book-holder">
                  <div className="book">
                    <Img
                      filename={frontmatter.productImage}
                      className="book-illustration"
                      alt={frontmatter.altText}
                      title={frontmatter.altText}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-wrapper">
              <div className="icon-wrapper">
                <div className="icon-item icon-item__facebook">
                  <a
                    href="#subscribe"
                    // target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M81.7577 25.394C95.3418 42.9382 92.1316 68.1727 74.5874 81.7569C57.0432 95.3411 31.8087 92.1308 18.2245 74.5866C4.64039 57.0424 7.85062 31.8079 25.3948 18.2238C42.939 4.63961 68.1735 7.84984 81.7577 25.394Z"
                          stroke="#210945"
                          strokeWidth="2"
                        />
                        <path
                          d="M53.6143 42.4499H60.2128L59.535 49.0173H53.6143H52.6143V50.0173V73.3452H44.4937V50.0173V49.0173H43.4937H39.7141V42.4141H43.4937H44.4937V41.4141V35.8459C44.4937 33.9862 44.9393 31.6695 46.2825 29.8444C47.5874 28.0714 49.8258 26.6416 53.698 26.6416H60.1899V33.0058H55.7777C55.3306 32.9859 54.8845 33.0644 54.471 33.2359C54.0482 33.4113 53.6703 33.6794 53.3651 34.0205C53.0598 34.3615 52.8351 34.7667 52.7075 35.2063C52.5884 35.6167 52.5568 36.0472 52.6143 36.4701V41.4499V42.4499H53.6143Z"
                          fill="#210945"
                          stroke="#210945"
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="100" height="100" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>

                <div className="icon-item icon-item__phone">
                  <a
                    href="#subscribe"
                    // target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Phone"
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M9.83008 49.9941C9.83008 42.0476 12.1866 34.2796 16.6017 27.6725C21.0168 21.0653 27.2921 15.9159 34.6339 12.8755C41.9758 9.83499 50.0544 9.04006 57.848 10.5912C65.6417 12.1423 72.8003 15.9699 78.4185 21.5897C84.0368 27.2096 87.8622 34.3693 89.4111 42.1634C90.9599 49.9575 90.1627 58.0359 87.1201 65.3768C84.0775 72.7178 78.9262 78.9916 72.3178 83.4047C65.7094 87.8179 57.9407 90.1722 49.9942 90.1699C39.3409 90.1668 29.1251 85.9326 21.5932 78.3986C14.0613 70.8645 9.83008 60.6474 9.83008 49.9941Z"
                          stroke="#210945"
                          strokeWidth="2"
                        />
                        <path
                          d="M68.1085 60.0315C66.7822 58.9561 65.3603 58.0001 63.9623 57.0203C61.1782 55.0607 58.6331 54.9054 56.554 58.0599C55.3591 59.8283 53.7579 59.9 52.0373 59.1233C47.3824 57.1694 43.6418 53.5227 41.5701 48.919C40.6261 46.7921 40.6381 44.8922 42.8367 43.3986C44.0316 42.61 45.2265 41.6661 45.095 39.9335C44.9636 37.6871 39.491 30.1354 37.3283 29.3468C36.4571 29.0237 35.499 29.0237 34.6278 29.3468C29.5496 31.0435 27.4585 35.2256 29.4659 40.1605C35.4403 54.9054 46.039 65.1695 60.5329 71.4307C61.254 71.7029 61.9977 71.9108 62.7554 72.052C66.0653 72.052 69.9247 68.8975 71.0599 65.7311C72.195 62.5646 69.865 61.4773 68.0607 60.0315H68.1085Z"
                          fill="#210945"
                        />
                        <path
                          d="M51.7506 30.2788C62.385 31.9158 67.2841 36.9702 68.6462 47.6764C68.7657 48.6681 68.3953 50.1617 69.8411 50.1856C71.2869 50.2095 70.9643 48.7518 70.9763 47.7959C71.0958 37.6991 62.3014 28.3551 52.0851 28.0085C51.3204 28.1161 49.6954 27.4708 49.6237 29.2034C49.6237 30.3983 50.9022 30.1713 51.7864 30.3147L51.7506 30.2788Z"
                          fill="#210945"
                        />
                        <path
                          d="M53.8297 33.2186C52.8021 33.0871 51.4399 32.6092 51.2129 34.0311C50.9858 35.453 52.4078 35.3694 53.4354 35.5844C60.0072 37.0422 62.2895 39.432 63.329 45.956C63.4844 46.9 63.1737 48.3458 64.7868 48.1427C65.9817 47.9515 65.5515 46.6849 65.6471 45.9441C65.7068 39.6948 60.3418 33.9952 53.7819 33.2186H53.8297Z"
                          fill="#210945"
                        />
                        <path
                          d="M54.4271 38.3321C53.746 38.3321 53.0769 38.4157 52.8259 39.1446C52.4555 40.2439 53.2442 40.4948 54.0208 40.6263C55.2066 40.7243 56.3132 41.2612 57.1242 42.1319C57.9352 43.0025 58.3923 44.1443 58.4061 45.3341C58.4778 46.063 58.9438 46.6604 59.6009 46.529C60.5807 46.4095 60.6644 45.5372 60.6285 44.7128C60.6883 41.7017 57.2709 38.2126 54.3554 38.2843L54.4271 38.3321Z"
                          fill="#210945"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="100" height="100" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>

                <div className="icon-item icon-item__telegram">
                  <a
                    href="#subscribe"
                    // target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M9.8302 49.9941C9.8302 42.0476 12.1868 34.2796 16.6018 27.6725C21.0169 21.0653 27.2922 15.9159 34.6341 12.8755C41.9759 9.83499 50.0545 9.04006 57.8482 10.5912C65.6418 12.1423 72.8004 15.9699 78.4187 21.5897C84.0369 27.2096 87.8623 34.3693 89.4112 42.1634C90.9601 49.9575 90.1628 58.0359 87.1202 65.3768C84.0776 72.7178 78.9264 78.9916 72.318 83.4047C65.7095 87.8179 57.9408 90.1722 49.9943 90.1699C39.3411 90.1668 29.1252 85.9326 21.5933 78.3986C14.0614 70.8645 9.8302 60.6474 9.8302 49.9941Z"
                          stroke="#210945"
                          strokeWidth="2"
                        />
                        <path
                          d="M70.3778 36.9973L70.3725 37.0177L70.3682 37.0384C68.3529 46.597 66.3297 56.1555 64.2985 65.7141L64.2944 65.7333L64.2911 65.7527C64.2126 66.2096 64.0642 66.6516 63.851 67.0632L63.8507 67.0636C63.7668 67.2259 63.6285 67.3536 63.4601 67.4245C63.2916 67.4953 63.1037 67.5047 62.929 67.4512L62.9008 67.4426L62.8721 67.4356C62.445 67.3318 62.045 67.1379 61.6989 66.867L61.6888 66.8592L61.6786 66.8515C60.6095 66.0581 59.5421 65.2688 58.476 64.4805C56.5057 63.0235 54.54 61.5699 52.5769 60.0998C52.43 59.9595 52.2574 59.8483 52.0681 59.7724C51.8412 59.6813 51.5963 59.6436 51.3525 59.6621C51.1086 59.6806 50.8723 59.7549 50.6617 59.8792C50.4877 59.9818 50.3352 60.1163 50.2118 60.2751C49.4168 61.0691 48.6376 61.8249 47.8519 62.5871C47.1546 63.2635 46.4522 63.9449 45.729 64.6624L45.709 64.6822L45.6902 64.7031C45.5307 64.8802 45.3345 65.0205 45.1152 65.1141C44.896 65.2077 44.659 65.2524 44.4207 65.245L44.3703 65.2435L44.3201 65.247C44.305 65.2481 44.29 65.2437 44.2778 65.2347C44.2657 65.2257 44.2571 65.2126 44.2538 65.1978L44.2437 65.1537L44.2297 65.1107C44.184 64.9701 44.1383 64.8295 44.0926 64.689L44.8699 64.2907C45.094 64.1759 45.2795 63.9979 45.4034 63.7787C45.5097 63.5907 45.5666 63.3795 45.5698 63.1647C45.6295 62.498 45.6918 61.8268 45.7543 61.153C45.8896 59.6961 46.0259 58.2268 46.1398 56.763L46.1409 56.7483L46.1417 56.7336C46.1471 56.6201 46.1756 56.5088 46.2253 56.4066C46.275 56.3044 46.3449 56.2134 46.4308 56.139L46.4374 56.1333L46.4439 56.1274C52.172 50.9888 57.8922 45.8343 63.6044 40.6638C63.6846 40.5917 63.7677 40.5174 63.8527 40.4416C64.13 40.1941 64.4268 39.9291 64.7047 39.6608L64.711 39.6547L64.7172 39.6485C64.7175 39.6482 64.7185 39.6473 64.7202 39.6457C64.7473 39.6205 64.945 39.4365 65.0698 39.2332C65.1513 39.1005 65.2374 38.9124 65.2618 38.6763C65.2872 38.4313 65.2396 38.1962 65.1408 37.9876C64.9329 37.5486 64.5591 37.3287 64.2257 37.2454C63.9294 37.1713 63.6534 37.198 63.4837 37.2248L63.4784 37.2256C62.9069 37.319 62.3638 37.5395 61.8891 37.8707C54.8714 42.3242 47.8458 46.754 40.8122 51.16C40.6336 51.2502 40.4726 51.3721 40.3372 51.5201C40.1816 51.6901 40.0632 51.8906 39.9894 52.1089C39.9557 52.2089 39.9317 52.3116 39.9175 52.4156C39.6804 52.1814 39.3852 52.0148 39.0623 51.9329C36.8351 51.2556 34.6092 50.5589 32.3787 49.8608C31.6311 49.6268 30.883 49.3926 30.1342 49.159L30.1143 49.1528L30.0942 49.1474C29.7804 49.0637 29.4787 48.9398 29.1966 48.7789L29.1331 48.7427L29.0651 48.7162C29.05 48.7103 29.0368 48.7003 29.0271 48.6873C29.0173 48.6744 29.0114 48.659 29.0099 48.6429C29.0084 48.6267 29.0114 48.6105 29.0186 48.596C29.0258 48.5815 29.0369 48.5693 29.0507 48.5607L29.1131 48.5218L29.1692 48.4742C29.5857 48.1205 30.0673 47.8519 30.587 47.6833L30.6152 47.6741L30.6429 47.6633L42.8496 42.8857L42.8546 42.8838L69.2207 32.7292L69.2314 32.7251L69.2421 32.7207L69.4452 32.637L69.4953 32.6164L69.5428 32.5905C69.7113 32.4987 69.9025 32.457 70.0939 32.4702C70.2853 32.4833 70.469 32.5509 70.6233 32.6649C70.7777 32.7789 70.8962 32.9346 70.9651 33.1137C71.0339 33.2928 71.0502 33.4879 71.0119 33.6759L71.9919 33.8751L71.0001 33.7471C70.8588 34.8421 70.6509 35.9275 70.3778 36.9973ZM63.8249 39.197C63.8249 39.1971 63.8233 39.1972 63.8204 39.1972L63.8249 39.197ZM63.4021 38.1355C63.4021 38.1355 63.4016 38.1361 63.4003 38.1376C63.4014 38.1363 63.402 38.1356 63.4021 38.1355Z"
                          fill="#210945"
                          stroke="#210945"
                          strokeWidth="2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="100" height="100" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>

                <div className="icon-item icon-item__watsapp">
                  <a
                    href="#subscribe"
                    // target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watsapp"
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M78.4035 21.5856C94.0931 37.2752 94.0931 62.7131 78.4035 78.4027C62.7138 94.0923 37.2759 94.0923 21.5863 78.4027C5.89671 62.7131 5.89671 37.2752 21.5863 21.5856C37.2759 5.89596 62.7138 5.89596 78.4035 21.5856Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M60.9392 54.5104C60.3656 54.1997 57.6054 52.7061 57.0916 52.5029C56.5778 52.2998 56.1835 52.1803 55.7892 52.7419C55.3949 53.3035 54.2478 54.5462 53.9013 54.9644C53.5548 55.3826 53.2083 55.3707 52.7064 55.06C51.0413 54.3205 49.5171 53.2976 48.2017 52.0369C46.9906 50.8349 45.9674 49.4573 45.1667 47.9504C44.856 47.3649 45.1667 47.0662 45.4654 46.7555C45.7641 46.4449 46.0628 46.1103 46.3616 45.7877C46.6109 45.5054 46.8164 45.1872 46.971 44.8437C47.0536 44.6894 47.0968 44.517 47.0968 44.3419C47.0968 44.1668 47.0536 43.9944 46.971 43.84C46.8395 43.5533 45.7761 40.6855 45.3579 39.5265C44.9396 38.3674 44.4378 38.5347 44.163 38.5108C43.8881 38.4869 43.458 38.4391 43.0756 38.4272C42.7837 38.4241 42.4942 38.4808 42.225 38.5938C41.9558 38.7069 41.7126 38.8738 41.5103 39.0844C40.842 39.6768 40.3029 40.4006 39.9267 41.2106C39.5505 42.0206 39.3452 42.8994 39.3237 43.7922C39.4447 45.9465 40.1831 48.0205 41.4506 49.7667C41.7254 50.161 45.1786 56.2668 50.9141 58.788C56.6495 61.3093 56.6854 60.5326 57.7369 60.4728C58.5458 60.3513 59.3194 60.0581 60.0056 59.6129C60.6919 59.1678 61.275 58.581 61.7159 57.8919C62.1263 57.0508 62.2761 56.1063 62.146 55.1795C62.0146 54.9405 61.6442 54.7852 61.0826 54.4745L60.9392 54.5104ZM50.4122 68.1082C46.7534 68.1093 43.1752 67.0329 40.1243 65.0134L32.9549 67.3076L35.285 60.3653C32.8272 56.9639 31.5858 52.8342 31.7607 48.6414C31.9355 44.4486 33.5165 40.4366 36.249 37.2517C38.9814 34.0667 42.7064 31.8942 46.8238 31.0838C50.9413 30.2735 55.2117 30.8726 58.9473 32.7847C62.6828 34.6967 65.6661 37.8104 67.4167 41.6243C69.1673 45.4382 69.5833 49.7303 68.5977 53.8093C67.6121 57.8884 65.2823 61.5171 61.9834 64.1109C58.6845 66.7047 54.6087 68.1127 50.4122 68.1082V68.1082ZM50.4122 26.9443C46.4356 26.949 42.5314 28.0086 39.0981 30.0151C35.6648 32.0215 32.8253 34.9029 30.8694 38.3653C28.9135 41.8276 27.9112 45.7469 27.9648 49.7231C28.0184 53.6994 29.126 57.5902 31.1746 60.9986L27.1239 73.055L39.5627 69.076C42.5636 70.7321 45.9036 71.6794 49.3271 71.8456C52.7506 72.0118 56.1667 71.3924 59.3139 70.0348C62.4611 68.6772 65.2559 66.6175 67.4843 64.0133C69.7127 61.4091 71.3157 58.3294 72.1704 55.0102C73.0252 51.691 73.1091 48.2202 72.4157 44.8636C71.7222 41.5069 70.2699 38.3535 68.1699 35.6446C66.0699 32.9358 63.3778 30.7435 60.2999 29.2354C57.2219 27.7274 53.8397 26.9437 50.4122 26.9443V26.9443Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="100" height="100" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>

              <h1 className="product-title heading-md">{frontmatter.title}</h1>
              <div className={"product-description show"}>
                {frontmatter.description.map(description => {
                  const { text } = description

                  return (
                    <p className="text-thin desc" key={text}>
                      {text}
                    </p>
                  )
                })}

                <ul className="product-additional-details">
                  <li className="text-thin">
                    <span className="title-detail">Availability:</span>{" "}
                    {frontmatter.availability}
                  </li>
                  <li className="text-thin">
                    <span className="title-detail">ISBN 13:</span>{" "}
                    {frontmatter.ISBN13}
                  </li>
                  <li className="text-thin">
                    <span className="title-detail">ISBN 10:</span>{" "}
                    {frontmatter.ISBN10}
                  </li>
                  <li className="text-thin">
                    <span className="title-detail">Author:</span>{" "}
                    {frontmatter.author}
                  </li>
                  <li className="text-thin">
                    <span className="title-detail">Page Count:</span>{" "}
                    {frontmatter.pageCount}
                  </li>
                  <li className="text-thin">
                    <span className="title-detail">Dimensions:</span>{" "}
                    {frontmatter.dimensions}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductTemplate

export const productQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        setID
        date(formatString: "MMMM DD, YYYY")
        path
        language
        productImage
        bookCoverImage
        altText
        title
        description {
          text
        }
        seoTitle
        seoDescription
        canonical
        ogUrl
        ogTitle
        ogDescription
        ogImageUrl
        ogImageWidth
        ogImageHeight
        ogImageAlt
        siteName
        twitterHandle
        twitterSite
        twitterCardType
        availability
        ISBN13
        ISBN10
        author
        pageCount
        dimensions
      }
    }
  }
`
