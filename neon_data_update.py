import pandas as pd
import psycopg2
from tqdm import tqdm

# Load the data from CSV
data = pd.read_csv('Live_Luminous_Data.csv')

# Standardize column names: replace spaces with underscores and lowercase
data.columns = data.columns.str.replace(' ', '_').str.lower()

# Convert the 'time' column to the desired format (dd-mm-yyyy hh:mm)
data['time'] = pd.to_datetime(data['time'], format='%d-%m-%Y %H:%M')

# Add 'battery_level_kwh' column (assuming it exists in the CSV)
if 'battery_level_(kwh)' in data.columns:
    data['battery_level_kwh'] = data['battery_level_(kwh)']
else:
    raise ValueError("Column 'battery_level_(kwh)' not found in the CSV file.")

# Connect to the PostgreSQL database
conn = psycopg2.connect(
    "postgresql://luminous_owner:4wspbCRQ2IzV@ep-super-silence-a8xj3bsn.eastus2.azure.neon.tech/luminous?sslmode=require"
)
cursor = conn.cursor()

# Create table if it doesn't exist, with an auto-incrementing primary key 'id'
cursor.execute("""
CREATE TABLE IF NOT EXISTS solar_data9 (
    id SERIAL PRIMARY KEY,
    time TIMESTAMP,
    instantaneous_solar_generation_kwh FLOAT,
    instantaneous_solar_usage_kwh FLOAT,
    instantaneous_user_consumption_kwh FLOAT,
    device_1_consumption_kw FLOAT,
    device_2_consumption_kw FLOAT,
    device_3_consumption_kw FLOAT,
    device_4_consumption_kw FLOAT,
    tou_rates_inr FLOAT,
    predicted_tou_rates_inr FLOAT,
    cumulative_energy_consumption FLOAT,
    predicted_solar_generation_kwh FLOAT,
    optimal_solar_usage_kwh FLOAT,
    optimal_grid_usage_kwh FLOAT,
    instantaneous_full_grid_cost_inr FLOAT,
    instantaneous_actual_cost_inr FLOAT,
    instantaneous_savings_inr FLOAT,
    cumulative_savings_inr FLOAT,
    cumulative_bill_inr FLOAT,
    cumulative_energy_saved_kwh FLOAT,
    trees_saved FLOAT,
    battery_level_kwh FLOAT  -- New column added
);
""")

# Prepare the SQL insert statement
insert_query = """
    INSERT INTO solar_data9 (
        time, instantaneous_solar_generation_kwh, instantaneous_solar_usage_kwh, instantaneous_user_consumption_kwh,
        device_1_consumption_kw, device_2_consumption_kw, device_3_consumption_kw, device_4_consumption_kw,
        tou_rates_inr, predicted_tou_rates_inr, cumulative_energy_consumption,
        predicted_solar_generation_kwh, optimal_solar_usage_kwh, optimal_grid_usage_kwh,
        instantaneous_full_grid_cost_inr, instantaneous_actual_cost_inr,
        instantaneous_savings_inr, cumulative_savings_inr, cumulative_bill_inr,
        cumulative_energy_saved_kwh, trees_saved, battery_level_kwh  -- Included new column
    )
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""

# Iterate over the DataFrame and insert each row into the database
for index, row in tqdm(data.iterrows(), total=data.shape[0], desc="Updating solar_data9"):
    cursor.execute(insert_query, (
        row['time'],
        row['instantaneous_solar_energy_generation(kwh)'],
        row['instantaneous_solar_usage_(kwh)'],
        row['instantaneous_user_consumption_(kwh)'],
        row['device_1_consumption_(kw)'],
        row['device_2_consumption_(kw)'],
        row['device_3_consumption_(kw)'],
        row['device_4_consumption_(kw)'],
        row['tou_rates_(inr)'],
        row['predicted_tou_rates_(1_hour_ahead)'],
        row['cumulative_energy_consumption'],
        row['predicted_solar_generation_(kwh)'],
        row['optimal_solar_usage_(kwh)'],
        row['optimal_grid_usage_(kwh)'],
        row['instantaneous_full_grid_cost_(inr)'],
        row['instantaneous_actual_cost_(inr)'],
        row['instantaneous_savings_(inr)'],
        row['cumulative_savings_(inr)'],
        row['cumulative_bill_(inr)'],
        row['cumulative_energy_saved_(kwh)'],
        row['trees_saved'],
        row['battery_level_kwh']  # Insert the new battery level column
    ))

# Commit the transaction
conn.commit()

# Close the cursor and connection
cursor.close()
conn.close()

print("Data updated successfully in solar_data9!")