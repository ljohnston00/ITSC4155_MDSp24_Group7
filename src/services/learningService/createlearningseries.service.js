import Cookies from 'js-cookie';
import Paths from "../path.service";

export const createLearningSeries = async (formData) => {
  const token = Cookies.get('Authorization');
  const response = await fetch(`${Paths.API_BASE}/contentmanagement/series/create`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log('Failed to create learning series');
    return null;
  }
};
