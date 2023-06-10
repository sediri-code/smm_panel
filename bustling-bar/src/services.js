import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

const supabaseUrl = 'https://xbyoalacxxhvcgrexerf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhieW9hbGFjeHhodmNncmV4ZXJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjk4MTgsImV4cCI6MjAwMTkwNTgxOH0.5_hcJcr1KfeOCpWTzCmMrIyeRBTepPdbHw7Jr5CYHPw'; // Replace with your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

const getServices = async () => {
  const apiKey = '152a7507e163ff0be2c370a128d2759d'; // Replace with your API key
  const apiUrl = 'https://easysmmpanel.com/api/v2';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      key: apiKey,
      action: 'services',
    }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log('API Response:', data);
    

    if (response.ok) {
      const formattedData = data.map(item => ({
        service: item.service,
        name: item.name,
        type: item.type,
        category: item.category,
        rate: item.rate,
        minimum: item.min,
        max: item.max,
        refill: item.refill,
        cancel: item.cancel
      }));

      const { data: insertedData, error } = await supabase
        .from('services')
        .upsert(formattedData, { onConflict: ['service'] });

      console.log('Inserted Data:', insertedData);
      console.log('Error:', error);

      if (error) {
        console.error('Error inserting services:', error);
      } else {
        console.log('Services inserted successfully:', insertedData);
      }
    } else {
      console.error('API Error:', data.error);
    }
  } catch (error) {
    console.error('API Request Error:', error);
  }
};

getServices();


