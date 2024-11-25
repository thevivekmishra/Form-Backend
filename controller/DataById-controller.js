import Form from '../model/Form-model.js';

export const fetchDataById = async (req, res) => {
    try {
        const { id } = req.params; 

        // Find form data by ID
        const formData = await Form.findById(id);

        // If form data does not exist
        if (!formData) {
            return res.status(404).json({
                message: 'Form data not found',
                success: false
            });
        }

        // Return the fetched form data
        res.status(200).json({
            message: 'Form data fetched successfully',
            success: true,
            data: formData
        });
    } catch (error) {
        console.error('Error fetching form data:', error);
        res.status(500).json({
            message: 'Error fetching form data',
            success: false
        });
    }
};
