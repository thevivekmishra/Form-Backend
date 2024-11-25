import Form from '../model/Form-model.js';

export const getAllData = async (req, res) => {
    try {
        const forms = await Form.find();

        if (!forms || forms.length === 0) {
            return res.status(404).json({ message: "No form data found." });
        }

        res.status(200).json({ message: "Form data fetched successfully", data: forms });
    } catch (error) {
        console.error("Error fetching form data:", error);
        res.status(500).json({ message: "Failed to fetch form data.", error: error.message });
    }
};
