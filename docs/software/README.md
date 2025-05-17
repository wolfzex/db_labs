# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення бази даних

```sql

CREATE TABLE Profile
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(45)  NOT NULL,
    last_name  VARCHAR(45)  NOT NULL,
    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL
);

CREATE TABLE MediaContent
(
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(100) NOT NULL,
    description  TEXT,
    body         TEXT         NOT NULL,
    content_type VARCHAR(45)  NOT NULL,
    created_at   DATE DEFAULT CURRENT_DATE,
    profile_id   INT          NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Role
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(45) NOT NULL,
    description VARCHAR(45) NOT NULL
);

CREATE TABLE Permission
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE RolePermission
(
    role_id       INT NOT NULL,
    permission_id INT NOT NULL,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES Role (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES Permission (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE AnalysisReport
(
    id         SERIAL PRIMARY KEY,
    title      VARCHAR(45)  NOT NULL,
    body       VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    profile_id INT          NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE AnalysisResult
(
    id                SERIAL PRIMARY KEY,
    title             VARCHAR(45)  NOT NULL,
    description       VARCHAR(255),
    body              VARCHAR(255) NOT NULL,
    created_at        DATE DEFAULT CURRENT_DATE,
    analysisReport_id INT          NOT NULL,
    profile_id        INT          NOT NULL,
    FOREIGN KEY (analysisReport_id) REFERENCES AnalysisReport (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentAnalysisResult
(
    mediaContent_id   INT NOT NULL,
    analysisResult_id INT NOT NULL,
    PRIMARY KEY (mediaContent_id, analysisResult_id),
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (analysisResult_id) REFERENCES AnalysisResult (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Tag
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE AnalysisResultTag
(
    analysisResult_id INT NOT NULL,
    tag_id            INT NOT NULL,
    PRIMARY KEY (analysisResult_id, tag_id),
    FOREIGN KEY (analysisResult_id) REFERENCES AnalysisResult (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Source
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45)  NOT NULL,
    url  VARCHAR(255) NOT NULL
);

CREATE TABLE SourceTag
(
    tag_id    INT NOT NULL,
    source_id INT NOT NULL,
    PRIMARY KEY (tag_id, source_id),
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (source_id) REFERENCES Source (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentTag
(
    tag_id          INT NOT NULL,
    mediaContent_id INT NOT NULL,
    PRIMARY KEY (tag_id, mediaContent_id),
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentSource
(
    source_id       INT NOT NULL,
    mediaContent_id INT NOT NULL,
    PRIMARY KEY (source_id, mediaContent_id),
    FOREIGN KEY (source_id) REFERENCES Source (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE UserRole
(
    profile_id INT NOT NULL,
    role_id    INT NOT NULL,
    PRIMARY KEY (profile_id, role_id),
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES Role (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE AnalysisReportTag
(
    analysisReport_id INT NOT NULL,
    tag_id            INT NOT NULL,
    PRIMARY KEY (analysisReport_id, tag_id),
    FOREIGN KEY (analysisReport_id) REFERENCES AnalysisReport (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Profile (id, first_name, last_name, email, password)
VALUES (1, 'Lea', 'Seydoux', 'lea.seydoux@example.com', 'bestever!'),
       (2, 'Emily', 'Nguyen', 'emily.n@example.org', 'emNg@2023'),
       (3, 'Carlos', 'Ramos', 'carlos.ramos@mail.com', 'r@mos918'),
       (4, 'Aisha', 'Singh', 'aisha_singh@domain.com', 'aish@1020'),
       (5, 'Henry', 'Kim', 'henry.kim@abc.com', 'hkim8823'),
       (6, 'Maria', 'Ivanova', 'maria.ivanova@mail.ru', 'miV1234'),
       (7, 'Liam', 'Wong', 'liam.wong@site.net', 'wongpass99'),
       (8, 'Sophia', 'Berg', 'sophia.berg@email.com', 'berG4321'),
       (9, 'Noah', 'Schmidt', 'noah.schmidt@example.net', 'nSchm890'),
       (10, 'Isabella', 'Ricci', 'isa.ricci@provider.org', 'isRicci_77');

INSERT INTO Role (id, name, description)
VALUES (1, 'Viewer', 'Basic access for content viewing'),
       (2, 'Analyst', 'Has permission to analyze and moderate content');

INSERT INTO Permission (id, name)
VALUES (1, 'access.reports'),
       (2, 'user.suspend'),
       (3, 'media.upload'),
       (4, 'media.search'),
       (5, 'media.edit'),
       (6, 'media.remove');

INSERT INTO Tag (id, name)
VALUES (1, 'Biology'),
       (2, 'AI & Robotics'),
       (3, 'Nutrition'),
       (4, 'Adventure'),
       (5, 'Climate'),
       (6, 'Astrophysics'),
       (7, 'Blockchain'),
       (8, 'Green Tech'),
       (9, 'eSports'),
       (10, 'Pharmaceuticals'),
       (11, 'Trend Analysis'),
       (12, 'User Sentiment'),
       (13, 'New Product'),
       (14, 'Sales Trends'),
       (15, 'Team Feedback'),
       (16, 'Influencer Reach'),
       (17, 'Competitive Review'),
       (18, 'Fleet Management'),
       (19, 'UX Research');

INSERT INTO Source (id, name, url)
VALUES (1, 'BBC Earth', 'https://www.bbcearth.com'),
       (2, 'Wired', 'https://www.wired.com'),
       (3, 'ESA', 'https://www.esa.int'),
       (4, 'WebMD', 'https://www.webmd.com'),
       (5, 'Scientific American', 'https://www.scientificamerican.com'),
       (6, 'Lonely Planet', 'https://www.lonelyplanet.com'),
       (7, 'Vimeo', 'https://vimeo.com'),
       (8, 'IGN', 'https://www.ign.com'),
       (9, 'Xbox Wire', 'https://news.xbox.com'),
       (10, 'HealthTech Weekly', 'https://www.healthtechweekly.com');

INSERT INTO MediaContent (id, title, description, body, content_type, created_at, profile_id)
VALUES (1, 'Deep Sea Creatures', 'Rare and fascinating sea animals in their natural habitat.',
        'Exploration of marine biodiversity in deep-sea ecosystems.', 'Article', '2024-11-01', 1),
       (2, 'Rise of Generative AI', 'How generative models are reshaping the future.',
        'Breakthroughs in text and image generation using AI.', 'Article', '2024-11-02', 2),
       (3, 'Journey to Saturn', 'ESAs latest mission beyond Jupiter.', 'https://youtu.be/saturn-exploration', 'Video',
        '2024-11-03', 3),
       (4, 'Balanced Diet 101', 'Everyday tips for a healthier diet.',
        'https://www.webmd.com/healthy-eating/guide/default.htm', 'Blog Post', '2024-11-04', 4),
       (5, 'What is Blockchain?', 'Explaining distributed ledger tech in simple terms.',
        'Blockchain could redefine data security and verification.', 'Article', '2024-11-05', 5),
       (6, 'Best Hidden Islands to Visit', 'Underrated travel spots away from the crowds.',
        'https://www.lonelyplanet.com/hidden-islands', 'Blog Post', '2024-12-06', 6),
       (7, 'Future of Solar Tech', 'Innovations in photovoltaic energy.', 'https://vimeo.com/future-solar', 'Video',
        '2024-12-07', 7),
       (8, 'Futuristic Metropolis Art', 'Concept art of neon-soaked future cities.',
        'https://www.ign.com/images/futurecity.jpg', 'Image', '2024-12-08', 8),
       (9, 'Frozen Combat Scene', 'Warrior duels monster atop icy cliff.',
        'https://news.xbox.com/images/fight_scene.jpeg', 'Image', '2024-12-09', 9),
       (10, 'Telemedicine Expansion', 'How tech is bridging healthcare gaps.',
        'Digital health tools are transforming care delivery.', 'Article', '2024-12-10', 10);

INSERT INTO AnalysisReport (id, title, body, created_at, profile_id)
VALUES (1, 'Energy Consumption Review', 'Detailed breakdown of energy usage across departments.', '2024-01-01', 1),
       (2, 'Emerging Tech Forecast', 'Predictions and implications of new technology trends.', '2024-01-02', 2),
       (3, 'User Experience Audit', 'Evaluation of UX design across major customer touchpoints.', '2024-01-03', 1),
       (4, 'Sales Funnel Optimization', 'Insights into conversion rates and funnel drop-offs.', '2024-01-04', 3),
       (5, 'Q4 Revenue Projection', 'Projected earnings based on updated financial inputs.', '2024-01-05', 2),
       (6, 'Remote Work Assessment', 'Review of employee productivity in remote environments.', '2024-01-06', 4),
       (7, 'Influencer Campaign Metrics', 'Performance metrics from recent influencer collaborations.', '2024-01-07',
        1),
       (8, 'Product Comparison Study', 'Side-by-side evaluation of feature sets and pricing.', '2024-01-08', 3),
       (9, 'Logistics Process Review', 'Inspection of delivery timelines and carrier efficiency.', '2024-01-09', 4),
       (10, 'Digital Engagement Report', 'Analysis of user interactions across digital platforms.', '2024-01-10', 2);

INSERT INTO RolePermission (role_id, permission_id)
VALUES (2, 1),
       (2, 2),
       (1, 3),
       (2, 3),
       (1, 4),
       (2, 4),
       (1, 5),
       (2, 5),
       (1, 6),
       (2, 6);

INSERT INTO UserRole (profile_id, role_id)
VALUES (1, 1),
       (1, 2),
       (2, 2),
       (3, 1),
       (3, 2),
       (4, 1),
       (5, 2),
       (6, 1),
       (7, 2),
       (8, 1),
       (8, 2);

INSERT INTO AnalysisResult (id, title, description, body, created_at, analysisReport_id, profile_id)
VALUES (1, 'Energy Efficiency Metrics', 'Key insights into departmental energy usage.',
        'The report outlines major inefficiencies and improvement areas.', '2024-02-01', 1, 1),
       (2, 'Tech Disruption Impact', 'Exploration of tech trends affecting our sector.',
        'Analysis covers disruption risks and opportunities.', '2024-02-02', 2, 2),
       (3, 'UX Improvement Areas', 'Identified friction points in the user journey.',
        'Recommendations for enhancing user satisfaction.', '2024-02-03', 3, 1),
       (4, 'Conversion Rate Patterns', 'Insights into sales funnel behavior.',
        'Identifies drop-off points and engagement gaps.', '2024-02-04', 4, 3),
       (5, 'Revenue Trends Summary', 'Forecast and actuals comparison for Q4.',
        'Discusses variance and underlying revenue patterns.', '2024-02-05', 5, 2),
       (6, 'Remote Workflow Insights', 'Challenges and benefits of remote operations.',
        'Data suggests new norms in communication and output.', '2024-02-06', 6, 4),
       (7, 'Influencer ROI Review', 'Return on investment from influencer campaigns.',
        'Analysis includes reach, clicks, and conversions.', '2024-02-07', 7, 1),
       (8, 'Feature Competitiveness Score', 'Assessment of key product features vs competitors.',
        'Shows relative strengths and market gaps.', '2024-02-08', 8, 3),
       (9, 'Shipment Performance Report', 'Efficiency and delay analysis in order fulfillment.',
        'Findings indicate improvement in 2-day delivery rates.', '2024-02-09', 9, 4),
       (10, 'Digital Pathway Evaluation', 'User actions across marketing funnels.',
        'Breakdown of entry points, drop-offs, and conversions.', '2024-02-10', 10, 2);

INSERT INTO MediaContentAnalysisResult (mediaContent_id, analysisResult_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10),
       (1, 2),
       (2, 3),
       (3, 4),
       (4, 5),
       (5, 6),
       (6, 7),
       (7, 8),
       (8, 9),
       (9, 10),
       (10, 1);


INSERT INTO MediaContentSource (source_id, mediaContent_id)
VALUES (1, 1),
       (1, 10),
       (2, 2),
       (2, 9),
       (3, 3),
       (3, 8),
       (4, 4),
       (4, 7),
       (5, 5),
       (5, 6),
       (6, 6),
       (6, 5),
       (7, 7),
       (7, 4),
       (8, 8),
       (8, 3),
       (9, 9),
       (9, 2),
       (10, 10),
       (10, 1);

INSERT INTO AnalysisResultTag (analysisResult_id, tag_id)
VALUES (1, 1),
       (1, 11),
       (2, 5),
       (2, 11),
       (3, 12),
       (4, 13),
       (5, 14),
       (6, 3),
       (6, 15),
       (7, 16),
       (8, 17),
       (9, 18),
       (10, 2),
       (10, 19);

INSERT INTO AnalysisReportTag (analysisReport_id, tag_id)
VALUES (1, 2),
       (2, 2),
       (3, 3),
       (4, 2),
       (5, 8),
       (6, 3),
       (7, 2),
       (8, 1),
       (9, 8),
       (10, 2);

INSERT INTO MediaContentTag (tag_id, mediaContent_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 5),
       (1, 7),
       (1, 10),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5),
       (2, 7),
       (2, 10),
       (3, 4),
       (3, 10),
       (4, 6),
       (5, 1),
       (5, 7),
       (6, 3),
       (7, 5),
       (8, 7),
       (9, 8),
       (9, 9),
       (10, 4),
       (10, 10);

INSERT INTO SourceTag (tag_id, source_id)
VALUES (1, 1),
       (1, 3),
       (1, 4),
       (1, 10),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5),
       (2, 10),
       (3, 4),
       (3, 10),
       (4, 1),
       (4, 6),
       (5, 1),
       (6, 1),
       (6, 3),
       (7, 2),
       (7, 5),
       (8, 1),
       (9, 8),
       (9, 9),
       (10, 4),
       (10, 10);
```