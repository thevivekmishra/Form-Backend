import Form from '../model/Form-model.js'; 

export const addData = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        address,
        feedback,
        currentProject,
        mode,
        web,
        android,
        cloud,
        gender,
        department,
        dateOfJoining,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !address || !currentProject || !mode || !gender || !department || !dateOfJoining) {
        return res.status(400).json({ message: "All required fields must be filled." });
    }

    try {
        // Check if a form with the same email already exists
        const existingForm = await Form.findOne({ email });
        if (existingForm) {
            return res.status(400).json({ message: "A form with this email already exists." });
        }

        // Create and save the new form
        const newForm = new Form({
            firstName,
            lastName,
            email,
            address,
            feedback,
            currentProject,
            mode,
            web,
            android,
            cloud,
            gender,
            department,
            dateOfJoining,
        });

        await newForm.save();
        res.status(201).json({ message: "Form data added successfully!", data: newForm });
    } catch (error) {
        console.error("Error adding form data:", error);
        res.status(500).json({ message: "Failed to add form data.", error: error.message });
    }
};
