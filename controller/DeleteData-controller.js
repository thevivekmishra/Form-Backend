import Form from '../model/Form-model.js'; 

export const deleteForm = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedForm = await Form.findByIdAndDelete(id);
      if (!deletedForm) {
        return res.status(404).json({ message: 'Form data not found' });
      }
      res.status(200).json({ message: 'Form data deleted successfully' });
    } catch (error) {
      console.error('Error deleting form data:', error);
      res.status(500).json({ message: 'Error deleting form data' });
    }
  };