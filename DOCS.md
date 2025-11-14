## 📊 Travel Site Database Schema

### 1. Users
| Column      | Type      | Notes                                |
|-------------|----------|---------------------------------------|
| id          | uuid (PK) | Primary key                          |
| email       | text      | Unique user email                    |
| role        | text      | `admin` or `customer` (default: customer) |
| created_at  | timestamp | Auto-generated                       |

---

### 2. Services
| Column      | Type      | Notes                                |
|-------------|----------|---------------------------------------|
| id          | uuid (PK) | Primary key                          |
| name        | text      | Service name (Taxi, Tour, Bike, Adventure) |
| description | text      | Optional description                 |
| created_at  | timestamp | Auto-generated                       |

---

### 3. Packages
| Column      | Type      | Notes                                |
|-------------|----------|---------------------------------------|
| id          | uuid (PK) | Primary key                          |
| service_id  | uuid (FK) | References **services.id**            |
| title       | text      | Package title                        |
| slug        | text      | Unique URL identifier                |
| description | text      | Package details                      |
| price       | numeric   | Price (e.g., 5000.00)                |
| duration    | text      | e.g., `3D/2N`, `5 hours`             |
| image_url   | text      | Package image link                   |
| created_at  | timestamp | Auto-generated                       |

---

### 4. Bookings
| Column      | Type      | Notes                                |
|-------------|----------|---------------------------------------|
| id          | uuid (PK) | Primary key                          |
| user_id     | uuid (FK) | References **users.id**               |
| package_id  | uuid (FK) | References **packages.id**            |
| travellers  | int       | Number of travellers (must be > 0)   |
| booking_date| date      | Date of travel                       |
| status      | text      | `pending`, `confirmed`, `cancelled`  |
| created_at  | timestamp | Auto-generated                       |



## 📐 Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    USERS ||--o{ BOOKINGS : "makes"
    SERVICES ||--o{ PACKAGES : "contains"
    PACKAGES ||--o{ BOOKINGS : "booked in"

    USERS {
        uuid id PK
        text email
        text role
        timestamp created_at
    }

    SERVICES {
        uuid id PK
        text name
        text description
        timestamp created_at
    }

    PACKAGES {
        uuid id PK
        uuid service_id FK
        text title
        text slug
        text description
        numeric price
        text duration
        text image_url
        timestamp created_at
    }

    BOOKINGS {
        uuid id PK
        uuid user_id FK
        uuid package_id FK
        int travellers
        date booking_date
        text status
        timestamp created_at
    }




Row Level Security (RLS) Policies
Users
-- Enable RLS
alter table users enable row level security;

-- Each user can see/update only their row
create policy "Users can view self" on users
  for select using (auth.uid() = id);

create policy "Users can update self" on users
  for update using (auth.uid() = id);

-- Admins can view/update all
create policy "Admins full access" on users
  for all using (exists (select 1 from users u where u.id = auth.uid() and u.role='admin'));



  Services
alter table services enable row level security;

-- Anyone can read services
create policy "Public read" on services
  for select using (true);

-- Only admins can insert/update/delete
create policy "Admins manage services" on services
  for all using (exists (select 1 from users u where u.id = auth.uid() and u.role='admin'));


Packages
  alter table packages enable row level security;

-- Anyone can read packages
create policy "Public read" on packages
  for select using (true);

-- Only admins can insert/update/delete
create policy "Admins manage packages" on packages
  for all using (exists (select 1 from users u where u.id = auth.uid() and u.role='admin'));



Bookings
alter table bookings enable row level security;

-- Users can view their own bookings
create policy "Users view own bookings" on bookings
  for select using (auth.uid() = user_id);

-- Users can insert their own bookings
create policy "Users create bookings" on bookings
  for insert with check (auth.uid() = user_id);

-- Users can cancel (update status) their own bookings
create policy "Users update own bookings" on bookings
  for update using (auth.uid() = user_id);

-- Admins can view/manage all
create policy "Admins manage all bookings" on bookings
  for all using (exists (select 1 from users u where u.id = auth.uid() and u.role='admin'));