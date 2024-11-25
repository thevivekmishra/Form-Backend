import Form from '../model/Form-model.js';

export const updateForm = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the form exists
        const formExists = await Form.findById(id);
        if (!formExists) {
            return res.status(404).json({
                message: 'Form data not found',
                success: false,
            });
        }

        // Update the form data
        const updatedForm = await Form.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedForm) {
            return res.status(500).json({
                message: 'Failed to update form data',
                success: false,
            });
        }

        res.status(200).json({
            message: 'Data updated successfully',
            success: true,
            data: updatedForm,
        });
    } catch (error) {
        console.error('Error updating form data:', error);
        res.status(500).json({
            message: 'Error updating form data',
            success: false,
        });
    }
};
